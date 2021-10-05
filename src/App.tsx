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
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

// Data Manager is required to control remote entry inputs in the calendar
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

class App extends React.Component {
  // Local JSON data example
  private localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2021, 9, 11, 6, 30), // Year, month (array position), day, hours, minutes
        StartTime: new Date(2021, 9, 11, 4, 0),
      },
    ],
  };

  // Remote data controller
  private remoteData = new DataManager({
    url: "https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  public render() {
    return (
      // This is the main component of the Syncfusion React Schedule library.
      // The previously imported services are injected so they become activate,
      // rendering them in the main view and turning on their functionalities.
      <ScheduleComponent eventSettings={{ dataSource: this.remoteData }}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default App;
