import { Client, Stomp } from "@stomp/stompjs";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";
import { StoreState } from "../redux/store/Store";
import { ENDPOINTS } from "../api/endpoints/Endpoints";

interface Notification {
    message: string;
}

const useWebSocketService = () => {
    const [messages, setMessages] = useState<Notification[]>([]);
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [connected, setConnected] = useState(false);

    const token = useSelector((state: StoreState) => state.user.accessToken);
  
    useEffect(() => {
        const socketFactory = () => new SockJS(ENDPOINTS.getLocalWebSocketConnection);
        const stompClient = new Client({
            webSocketFactory: socketFactory,
            connectHeaders: { Authorization: `Bearer ${token}` },
            onConnect: () => {
                setConnected(true);
                stompClient.subscribe(ENDPOINTS.getWebSocketNotificationsSubscription, (message) => {
                    const notification: Notification = JSON.parse(message.body);
                    setMessages((prevMessages) => [...prevMessages, notification]);
                });
            }
        });
  
        stompClient.activate();
        setStompClient(stompClient);
  
        return () => {
            if (stompClient) {
                stompClient.deactivate();
            }
        };
    }, []);
  
    const sendMessage = (message: string) => {
        if (stompClient && connected) {
            stompClient.publish({ destination: '/app/notify', body: JSON.stringify({ message }) });
        }
    };
  
    return { messages, sendMessage };
};
  
  export default useWebSocketService;