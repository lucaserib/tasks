"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../Components/Tasks/Tasks";

function page() {

    const {completedTasks} = useGlobalState();

    return <Tasks title="Completed Task" tasks = {completedTasks}/>;
}

export default page;