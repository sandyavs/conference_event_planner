# Conference Expense Planner

## Description
This is a conference event planning and pricing tool I developed for BudgetEase, a company that helps businesses manage event costs efficiently. The application built using **Vite** and **React 18**. The goal of this application is to help users, who manages a venues easily to calculate the total cost of a conference by selecting rooms, equipment add-ons, and meal packages for a given number of attendees.

## Learning Objectives
By completing this project, I was able to:
  - Build React Components: Create reusable functional components using proper composition and nesting to keep the UI modular and organized.
  - Work with React Hooks: Implemented useState and useEffect to manage local component state and control visibility and behavior of UI elements.
  - Integrate Redux Toolkit: Used Redux Toolkit to structure the app’s state using slices, actions, reducers, and a central redux store for better scalability and maintainability.
  - Render Dynamic Data: Mapped through arrays of objects to render components dynamically and keep the UI in sync with the state.
  - Handle User Interactions: Captured user actions like button clicks, applied conditional rendering, and triggered logic to update the interface responsively.

## Features
- Interactive UI: Real-time updates based on user selections to provide instant feedback.
- Venue & Add-on Selection: Components to pick from available rooms, microphones, projectors, and other event essentials.
- Meal Planning: Allows users to choose meal options based on guest count.
- State Management with Redux Toolkit: I used Redux slices to manage the state of venue selection, add-ons, meals, and pricing.
- Cost Breakdown Display: Shows selected items in a pop-up table format with subtotals and a final total cost.

## Results

### Landing Page
The landing page is designed to introduce users to the BudgetEase Conference Planner in a visually appealing and engaging way.

<img width="2864" height="1592" alt="image" src="https://github.com/user-attachments/assets/021f100d-af86-4784-81e2-59e622c47285" />

### Venue Selection
The Venue Selection section allows users to choose from a variety of room types based on their event needs. Each room option is displayed with its capacity and cost, along with increment and decrement buttons to adjust the quantity required.

<img width="2785" height="1112" alt="image" src="https://github.com/user-attachments/assets/90748ae7-e95c-4b04-b4e2-206c0a6fc6b0" />

### Add-ons Selection
The Add-ons Selection section enables users to customize their event setup with essential audio/visual equipment. Users can choose from a variety of tools such as Speakers, Microphones, Whiteboards, Projectors, and Signage. Each item includes increment and decrement buttons, allowing users to easily adjust the quantity of each add-on based on their specific conference requirements.

<img width="2739" height="1118" alt="image" src="https://github.com/user-attachments/assets/3c052ae7-be4e-4939-875a-3c43122d504d" />

### Meals Selection
The Meals Selection section allows users to plan catering for their conference by selecting meal options based on the number of attendees. Available choices include Breakfast, Lunch, High Tea, and Dinner. For each meal type, users can enter the desired number of guests using a text input box.

<img width="2258" height="1242" alt="image" src="https://github.com/user-attachments/assets/d977b4ec-2428-4aa2-b831-9cc0cdd66e53" />

### Show Details Pop-up
To give users a clear overview of their selections, the application includes a Show Details button in the header. When clicked, it opens a pop-up window that displays a detailed table. The table outlines item type, unit cost, quantity selected, and the subtotal for that specific item. At the bottom of the table, the total cost for all selected venues, add-ons, and meals are displayed.

<img width="2814" height="1390" alt="image" src="https://github.com/user-attachments/assets/57954958-3af6-4b0a-a17f-d3444f902634" />


