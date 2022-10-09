import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
  projectID: '2b4xrvsf',
  dataset: 'production'
}

export const client = sanityClient({
  projectId: clientConfig.projectID,
  dataset: clientConfig.dataset,
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);