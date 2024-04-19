import axios from "axios";
import { useEffect, useState } from "react";
import { Event } from "../models/Event";
import { ENDPOINTS } from "./endpoints/Endpoints";

export const useFetchAllEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await axios.get<Event[]>(
          `${ENDPOINTS.getAllEvents}?userId=1`
        );
        setEvents(response.data);
      } catch (error: any) {
        setError(`Error fetching all events: ${error.response?.data?.message || error.message || 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllEvents();
  }, []);
  return { events, isLoading, error };
};

export const useFetchEventById = (eventId: number | string) => {
  const [event, setEvent] = useState<Event>({} as Event);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const response = await axios.get<Event>(
          `${ENDPOINTS.getEventById(eventId)}?userId=1`
        );
        setEvent(response.data);
      } catch (error: any) {
        setError(`Error fetching event by id: ${error.response?.data?.message || error.message || 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventById();
  }, []);
  return { event, isLoading, error };
};
