import {ServiceXhr} from "./ServiceXhr";

export const ServiceHub = {
    getAllHosts: async () => {
        return ServiceXhr.callWithoutAuthWithoutBody("http://localhost:8080/api/hub/host/all", "GET");
    }
}