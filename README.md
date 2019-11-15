## Elizabeth Tong - Personal Website

My professional website as a dynamic resume. This has a fixed nav bar at the top with links to GitHub, LinkedIn, to download my resume in addition to dynamic links to sections of the main page which scroll down to the element.

There is a login form which authorized a users before viewing their current job applications.

## Future Implementations

User authentication with token-based sessions.
Full CRUD for job applications and interviews.
Pictures in the About Component.


## Can I Download this and use it?

This project is not meant to be installed, as it is a personal website.


## Built With

* [React](https://github.com/facebook/create-react-app)
* [Ruby on Rails](https://github.com/rails/rails) 
* [React-Scroll](https://github.com/fisshy/react-scroll)
* [File-Saver](https://github.com/eligrey/FileSaver.js/)

## Challenges

React-scroll does not have the best documentation. I had to pick apart pieces of it and only used a couple components. This code enables a user to click on a NavBar link which scrolls the page to the corresponding component. 

Navbar component 

```
  import {
    Link, 
    scroller
} from 'react-scroll'

export default funciton NavBar () {
    const scrollTo = (element) => {
        scroller.scrollTo(element, {
          duration: 1000,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      
  return (
       <Link 
          to='about'
          onClick={() => scrollTo("about")}
          >About</Link>
}
```

The scrollTo(element) corresponds to the <Element name="" > components in my Main component.
  
```
import {
    Element
} from 'react-scroll'

export default function Main() {

return (
  <Element name="about">
    <About />
  </ Element>
)
}
```
Overall, this worked well as a smooth navigation within my webpage and enables the user to physcially scroll to view different information or click to jump to the information.


## Authors

* **Elizabeth Tong** 

## License


MIT License

Copyright (c) 2019 Elizabeth Tong
