export async function fetchProfile() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}

export async function fetchLinks() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUser() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/users/1"
    )
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUserFolder() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/users/1/folders"
    )
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUserLink() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/users/1/links"
    )
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }
}