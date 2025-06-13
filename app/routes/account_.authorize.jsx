/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  console.log('loooooooooooooooxxxxxxxxxxxx');
  return context.customerAccount.authorize();
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
