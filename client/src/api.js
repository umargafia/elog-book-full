const API = 'http://localhost:4000/api/v1/';
export default API;
export const sendRequest = async ({ url, data, method, token }) => {
  try {
    const response = await fetch(`${API}${url}`, {
      method: method ? method : 'get',
      headers: {
        'Content-Type': 'application/json',
        [token && 'Authorization']: token && `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response) {
      const newData = await response.json();
      return newData;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const LoginUser = async ({ data }) => {
  const response = await sendRequest({
    url: `users/login`,
    method: `POST`,
    data,
  });

  return response;
};

export const SignUpUser = async ({ data }) => {
  const response = await sendRequest({
    url: `users/register`,
    method: `POST`,
    data,
  });

  return response;
};

export const UpdateUser = async ({ data, token }) => {
  const response = await sendRequest({
    url: `users/updateMe`,
    method: `PATCH`,
    token,
    data,
  });
  return response;
};

export const RemoveUser = async ({ token, id }) => {
  const response = await sendRequest({
    url: `users/${id}`,
    token,
    method: `DELETE`,
  });
  return response;
};

export const DeleteMyAccount = async ({ token }) => {
  const response = await sendRequest({
    url: `users/deleteMe`,
    token,
    method: `DELETE`,
  });
  return response;
};

export const GetAllUsers = async ({ token }) => {
  const response = await sendRequest({
    url: `users`,
    token,
  });
  return response;
};

export const GetUser = async ({ token, userId }) => {
  const response = await sendRequest({
    url: `users/${userId}`,
    token,
  });
  return response;
};

export const GetAllWeeks = async ({ token, userId }) => {
  return await sendRequest({
    url: `weeks/getAllWeeks/${userId}`,
    token,
  });
};

export const GetWeek = async ({ token, weekId }) => {
  return await sendRequest({
    url: `weeks/getWeek/${weekId}`,
    token,
  });
};

export const CreateWeek = async ({ token, data }) => {
  return await sendRequest({
    url: `weeks/create`,
    method: 'POST',
    token,
    data,
  });
};

export const updateWeek = async ({ token, data, weekId }) => {
  return await sendRequest({
    url: `weeks/update/${weekId}`,
    method: 'PATCH',
    token,
    data,
  });
};

export const deleteWeek = async ({ token, weekId }) => {
  return await sendRequest({
    url: `weeks/delete/${weekId}`,
    method: 'DELETE',
    token,
  });
};

export const CreateDay = async ({ token, data }) => {
  return await sendRequest({
    url: `weeks/day/create`,
    method: 'POST',
    token,
    data,
  });
};

export const getAllDays = async ({ token, weekId }) => {
  return await sendRequest({
    url: `weeks/day/${weekId}`,
    token,
  });
};

export const updateDay = async ({ token, data }) => {
  return await sendRequest({
    url: `weeks/day/update/`,
    method: 'PATCH',
    token,
    data,
  });
};
