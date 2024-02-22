import { Cpu } from "./Cpu.js";

export class CpuMngr {
    static baseUrl = "http://localhost:3000/api";

    static async getCpus() {
        try {
            let r = await fetch(CpuMngr.baseUrl + '/cpus');
            let json = await r.json();
            return json;
        }
        catch (err) {
            console.warn('!!! CPU List Unavailable !!!');
        }

    }
}