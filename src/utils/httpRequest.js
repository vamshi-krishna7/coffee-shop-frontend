import axios from "axios";
// import { errorLog } from "../lib/Logger/logger";

/**
 * Handle API request success.
 * @param response - The response object.
 * @returns The parsed response data.
 */
function handleSuccess(response) {
  return response.data;
}

/**
 * Handle API request errors.
 * @param error - The error object.
 * @throws The formatted error object.
 */
function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    const { status, data } = error.response;

    // Customize the error handling logic based on the status code or the response data
    let errorMessage = "";

    if (data && data.message) {
      // Use the error message from the response data if available
      errorMessage = data.message;
    } else {
      // Use a generic error message for other cases
      errorMessage = `Request failed with status code: ${status}`;
    }

    // errorLog(errorMessage);
  } else if (error.request) {
    // The request was made but no response was received
    // errorLog("No response received from the server");
    console.log(error.request)
  } else {
    // Something happened in setting up the request that triggered an error
    // errorLog("Error occurred while processing the request");
    console.log("Error occurred while processing the request")
  }
}

/**
 * Wrapper function for Axios requests.
 * @param config - The Axios request configuration.
 * @returns A Promise that resolves to the response data.
 * @throws An error if the request fails.
 */
async function httpRequest(config) {
  try {
    const response = await axios(config);
    console.log("handleSuccess(response)", handleSuccess(response))
    return handleSuccess(response);
  } catch (error) {
    handleError(error);
    throw error;
  }
}

export default httpRequest;
