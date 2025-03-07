import Redis from "ioredis";

class RedisClient {
    private client: Redis
    constructor() {
        this.client = new Redis(6379, '127.0.0.1');
    }

    async checkData(key: string): Promise<boolean> {
        const data = await this.getData(key);
        const now = Date.now();
        const delay = 60 * 30 * 1000;
        const isOutdated = now - data.time > delay;
        return isOutdated;
    }

    async cacheData(data: { key: string, value: string }): Promise<void> {
        if (await this.checkData(data.key)) {
            this.client.set(data.key, data.value);
        }
    }

    async getData(key: string):Promise<any> {
        const data = await this.client.get(key);
        if (!data) throw new Error("Data cannot be null !");
        return JSON.parse(data);
    }

    disconnect(): void {
        this.client.disconnect();
    }
}

export default RedisClient