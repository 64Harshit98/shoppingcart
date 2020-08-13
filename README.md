## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Code Splitting

This app has three components that are rendered Item, ItemList and Summary

Item component can be used to delete item or add quantity,
All the changes to the item can be seen in the summary component.
The states defined in the App component are shared among the two components with props.

The app is in colum layout in mobile view and row layout in bigger screens.
