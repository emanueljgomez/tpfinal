import React from "react";
import "./App.css";

// I am a big supporter of the idea of ​​not reinventing the wheel,
// so I will use the Schedule Component from Syncfusion React Schedule library
// and its additional modules in order to build the calendar.
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

class App extends React.Component {
  public render() {
    return (
      // This is the main component of the Syncfusion React Schedule library.
      // The previously imported services are injected so they become activate,
      // rendering them in the main view and turning on their functionalities.
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default App;
