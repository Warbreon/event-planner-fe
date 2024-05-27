import { ENDPOINTS } from "./endpoints/Endpoints";
import axiosInstance from "./axios/AxiosInstance";
import { ChargeRequest } from "../models/request/ChargeRequest";
import { RefundRequest } from "../models/request/RefundRequest";

const usePaymentAPI = () => {
	const processPayment = (chargeData: ChargeRequest) => axiosInstance.post(ENDPOINTS.processPayment, chargeData);
    const refundPayment = (refundData: RefundRequest) => axiosInstance.post(ENDPOINTS.refundPayment, refundData);

	return {
        processPayment,
        refundPayment
    }
};

export default usePaymentAPI;