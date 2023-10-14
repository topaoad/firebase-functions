import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch"

if (
  !process.env.ALGOLIA_APPLICATION_ID ||
  !process.env.ALGOLIA_APPLICATION_IDALGOLIA_API_KEY
) {
  throw new Error("ALGOLIA_APPLICATION_ID or ALGOLIA_API_KEY is missing")
}

const searchClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_APPLICATION_IDALGOLIA_API_KEY,
)

import {
  onDocumentCreated,
  onDocumentUpdated,
} from "firebase-functions/v2/firestore"

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

exports.updateuser = onDocumentUpdated("shops/{shopsId}/{reviews}", (event) => {
  let newValue
  if (event.data) {
    newValue = event.data.after.data()
  }
  // access a particular field as you would any JS property
  const name = newValue?.name
  console.log("name", name)

  // perform more operations ...
})

exports.createuser = onDocumentCreated("shops/{shopsId}/{reviews}", (event) => {
  // Get an object representing the document
  // e.g. {'name': 'Marie', 'age': 66}
  const snapshot = event.data
  if (!snapshot) {
    console.log("No data associated with the event")
    return
  }
  const data = snapshot.data()

  // access a particular field as you would any JS property
  const name = data.name
  console.log("name", name)

  // perform more operations ...
})
