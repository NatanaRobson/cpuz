import { CpuMngr } from "./CpuMngr.js";

const app = {
    data() {
        return {
            cpuList: [],
            // cpus: [],
            cpuQt: 0
        }
    },

    async mounted() {
        this.cpuList = await CpuMngr.getCpus();
        console.log(this.cpuList);
        this.cpuQt = await this.cpuList.length;
        console.log(this.cpuQt);
    }
}

Vue.createApp(app).mount('#app'); 