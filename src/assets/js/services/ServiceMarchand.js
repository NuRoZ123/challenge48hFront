import {ServiceXhr} from "./ServiceXhr";
import {ServiceHub} from "./ServiceHub";

export const ServiceMarchand = {
    getAll: async () => {
        let hosts = await ServiceHub.getAllHosts();
        let lesMarchands = [];
        for(let host of await hosts.json()) {
            let lesMarchandsDeLInstance = await ServiceXhr.callWithoutAuthWithoutBody(`http://${host.ip}:8080/api/marchands`, "GET");
            for(let unMarchandDeLInstance of await lesMarchandsDeLInstance.json()) {
                unMarchandDeLInstance.instance = host;
                lesMarchands.push(unMarchandDeLInstance);
            }
        }

        return lesMarchands;
    }
}