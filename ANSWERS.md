1. Why would you use class component over function components (removing hooks from the question)?

    • Class components are used more than functional components because functional components did not have        hooks for the longest time. Class components will allow you to have & set one single state, while           functional components will use multiple states. 

2. Name three lifecycle methods and their purposes.

    • componentDidMount - This component will run after the component has mounted, it is used for example a       fetch or axios call.

    • componentDidUnmount - This component will run after the component has been unmounted,this is used to        update a component after it is no longer mounted.

    • componentDidUpdate - This component will run when the component has finished updating.

3. What is the purpose of a custom hook?

    • Allows you to extract the state logic into a reusable code that can be consumed in various parts of an      App, and only has to be written once.

4. Why is it important to test our apps?

    • Because it is neverfun to have our Apps break while they are being used. We want to test to make sure our   apps are fully functional and running smoothly.