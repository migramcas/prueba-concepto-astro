import {GetListUsers} from "../core/application/GetListUsers.ts";
import type {User} from "../core/domain/User.ts";
import $ from "jquery";

function onEvent(events: string[], handler: EventListenerOrEventListenerObject) {
    events.forEach(event => document.addEventListener(event, handler));
}

const initUI = async () => {
    const getListUsers = new GetListUsers();
    const users: User[] = await getListUsers.getAll();
    const htmlUsers = users.map(user => `
            <div class="border border-1 p-3">
                <div>UserId: ${user.userId}</div>
                <div>id: ${user.id}</div>
                <div>Title: ${user.title}</div>
                <div>Completed: ${user.completed}</div>
            </div>
        `).join(" ");

    $("#list-users").html(htmlUsers)
}

onEvent(["DOMContentLoaded", "astro:after-swap"], initUI);
