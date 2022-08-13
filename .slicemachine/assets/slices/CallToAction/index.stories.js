import MyComponent from '../../../../slices/CallToAction';

export default {
  title: 'slices/CallToAction'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Revolutionize customized technologies","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua nulla esse tempor sint. Proident aute in id cillum adipisicing. Laborum velit quis excepteur mollit consequat aliqua aute non velit commodo tempor.","spans":[]}],"primaryLink":{"link_type":"Web","url":"http://google.com"},"primaryLinkLabel":"generate efficient ROI","secondaryLink":{"link_type":"Web","url":"https://slicemachine.dev"},"secondaryLinkLabel":"e-enable compelling relationships"},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _Small = () => <MyComponent slice={{"variation":"small","name":"Small","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading3","text":"Matrix cross-media platforms","spans":[]}],"primaryLink":{"link_type":"Web","url":"https://prismic.io"},"primaryLinkLabel":"revolutionize seamless portals","secondaryLink":{"link_type":"Web","url":"http://google.com"},"secondaryLinkLabel":"revolutionize rich metrics"},"id":"_Small"}} />
_Small.storyName = 'Small'

export const _WithImage = () => <MyComponent slice={{"variation":"withImage","name":"With Image","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Syndicate dot-com models","spans":[]}],"description":[{"type":"paragraph","text":"Non mollit Lorem veniam irure. Lorem aliquip non eu aliquip sint et officia esse ut duis fugiat elit excepteur non officia. Deserunt ea nostrud et aliquip do.","spans":[]}],"primaryLink":{"link_type":"Web","url":"http://twitter.com"},"primaryLinkLabel":"synthesize virtual portals","secondaryLink":{"link_type":"Web","url":"http://google.com"},"secondaryLinkLabel":"streamline 24/7 users","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"}},"id":"_WithImage"}} />
_WithImage.storyName = 'With Image'
