import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/coments";

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
    });

    const result = await request.get(baseUrl);
    // const result = await request.get(`${baseUrl}?${query}`);

    //TODO: temp solution until migration to collection service
    return Object.values(result).filter((comment) => comment.gameId === gameId);
};

export const create = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        text,
    });

    return newComment;
};
