import React from "react";
import { TaskCreationForm } from './TaskCreationForm';


function CreateTareaContainer() {
    return (
        <div className="bg-indigo-800 w-[40rem] rounded-lg p-5">
            <TaskCreationForm />
        </div>
    );
}

export { CreateTareaContainer }
