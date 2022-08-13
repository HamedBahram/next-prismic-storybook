import MyComponent from '../../../../slices/Navigation';

export default {
  title: 'slices/Navigation'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"navigation","items":[],"primary":{"title":[{"type":"paragraph","text":"Enim fugiat consequat ullamco officia consectetur excepteur nostrud id quis et reprehenderit. Ad deserunt veniam minim aute non dolore proident dolore anim officia ut amet deserunt qui. Sit labore non deserunt.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithSubnav = () => <MyComponent slice={{"variation":"withSubnav","name":"With Subnav","slice_type":"navigation","items":[{"title":[{"type":"paragraph","text":"Exercitation est dolor velit nulla ea mollit eiusmod. Anim aute aliquip ipsum do dolore ut do esse laborum ullamco adipisicing.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"paragraph","text":"Duis mollit irure commodo anim tempor qui veniam Lorem id nisi et cupidatat.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},{"title":[{"type":"paragraph","text":"Lorem culpa cillum sunt eiusmod deserunt culpa amet commodo velit.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"}},{"title":[{"type":"paragraph","text":"Ullamco ad officia laborum incididunt enim sint labore consectetur non magna aute.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"title":[{"type":"paragraph","text":"Eiusmod cupidatat nisi officia tempor aliquip consequat voluptate adipisicing. Irure enim in non magna officia aliqua.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"paragraph","text":"Amet mollit ad id veniam elit ad culpa. Lorem ipsum in excepteur consequat voluptate excepteur deserunt. Consequat et culpa quis Lorem id Lorem ipsum consectetur.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"id":"_WithSubnav"}} />
_WithSubnav.storyName = 'With Subnav'
