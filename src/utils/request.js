import httpRequest from "./httpRequest";

const generateHeaders = (headers, contentTypeHeader = true) => {
  const headersModified = headers || {};

  if (!("X-Requested-With" in headersModified)) {
    headersModified["X-Requested-With"] = "XMLHttpRequest";
  }

  if (contentTypeHeader && !("Content-Type" in headersModified)) {
    headersModified["Content-Type"] = "application/json";
  }

  return headersModified;
};

/**
 * Requests a URL, returning a promise
 *
 * @param url The URL we want to request
 * @param options The options we want to pass to the request
 * @param contentTypeHeader Determines if the "Content-Type" header should be included
 * @returns The response data
 */
export default async function request(
  requestURL,
  options,
  contentTypeHeader = true
) {
  let url = requestURL;
  const config = { ...options };
  const apiEndpointBase = import.meta.env.VITE_COFFEE_SHOP_API;
  url = `${apiEndpointBase}${requestURL}`;
  config.url = url;

  // Setting URL
  const restHeaders = generateHeaders(
    config.headers ? config.headers : {},
    contentTypeHeader
  );

  config.headers = { ...config.headers, ...restHeaders };

  const res = await httpRequest(config);
  return res;
}
