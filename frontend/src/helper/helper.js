export const apiGet = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const apiPost = async (url, data) => {
    const request = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data
        })
    })
    const response = await request.json()
    return response
}
