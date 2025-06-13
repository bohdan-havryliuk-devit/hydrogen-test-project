/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, context}) {
  console.log(JSON.stringify(context, null, 2), request)
  return context.customerAccount.login();
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
