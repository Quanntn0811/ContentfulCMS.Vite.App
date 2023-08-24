#### Structure

Create Hero and Projects components

#### Hero

Setup Hero component.

#### Nice Images

[Undraw](https://undraw.co/)

#### Headless CMS

A headless CMS is a back-end only content management system that provides content creators with an intuitive interface for creating and managing content, while leaving the front-end presentation layer to be handled by a separate system or platform. This approach allows for greater flexibility and scalability, as the content can be easily distributed to multiple channels and devices, without being limited by the constraints of a particular front-end system.

#### Install SDK

- npm install contentful

#### Get Entries

```js
import { createClient } from 'contentful'

const client = createClient({
  space: 'qz00uzgg3leh',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response.items))
  .catch(console.error)
```
