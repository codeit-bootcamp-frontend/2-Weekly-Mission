const postSignIn = async (payload) => {
    try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in",{
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        });
      
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json()
        console.log(json.data)
        return json.data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    };
};

export {postSignIn}