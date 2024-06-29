const baseUrl = "http://localhost:3030/jsonstore";

export const create = async (data) => {
    const response = await fetch(`${baseUrl}/games`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();

    return result;
};
