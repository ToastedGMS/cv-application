Basic React application built with the purpose of solidifying core React functionalities, such as:

- State;
- Conditional Rendering;
- Components;
- Props;
- JSX;
- Hooks;

This was built with the guidance of The Odin Project's CV Application project:
(https://www.theodinproject.com/lessons/node-path-react-new-cv-application)

It's still a work in progress as there is still some other features I want to add to it, but as of right now,
the basic functionality is there.

I also took the liberty of adding some personal choices of API's to get this running the way I want:

- React Hook Form (no longer used)
- Date FNS

(I decided to remove React Hook Form because the whole project took a change of approach; Originally you had a screen with input fields that would get submitted and then the Resume would be rendered. For that I needed a way to store and manipulate the form data and RHF provided an interesting approach to this problem. However when I decided to have both the Resume and the Application Form rendered at the same time, I realized it wouldn't be necessary to submit the form, therefore there was no point in maintaining the API :D )

You can visit a live preview of this website here: https://guileless-marshmallow-e8d501.netlify.app/
