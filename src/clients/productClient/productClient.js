export default class ProductClient {

    constructor(token) {
        this._token = token;
    }

    async getRequest(url) {
        const res = await fetch(url, {
            headers: new Headers({
                "Authorization": "Bearer " + this._token
            })
        });

        if (!res.ok) {
            console.log("Error", res.status);
        }

        return await res.json();
    }

    async postRequest(url, body) {
        const res = await fetch(url, {
            method: "post",
            headers: new Headers({
                "Authorization": "Bearer " + this._token,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            console.log("Error", res.status);
        }

        return await res.json();
    }

    async deleteRequest(url, body) {
        const res = await fetch(url, {
            method: "delete",
            headers: new Headers({
                "Authorization": "Bearer " + this._token,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            console.log("Error", res.status);
        }

        return await res.json();
    }

    async putRequest(url, body) {
        const res = await fetch(url, {
            method: "put",
            headers: new Headers({
                "Authorization": "Bearer " + this._token,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            console.log("Error", res.status);
        }

        return await res.json();
    }

    getAllProducts() {return this.getRequest("/api/product")}

    addProduct(msg) {
        return this.postRequest("/api/product", msg);
    }

    deleteProduct(msg) {
        return this.deleteRequest("/api/product", msg);
    }

    updateProduct(msg) {
        const url = "/api/product/" + msg.payload.id;
        return this.putRequest(url, msg);
    }

}
