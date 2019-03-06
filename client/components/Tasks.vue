<docs>
  <code>Tasks</code> component shows how to integrate with a RESTful API. It's
  located in <code>components/Tasks.vue</code> on the client side, i.e. within
  <code>client/</code> directory. It connects to Huncwot's RESTful endpoint defined
  on the backend (within <code>server/</code> directory) via <code>handlers</code>.
  Huncwot uses Axios as HTTP library.

  Each handler is a separate directory (a module). Each module contains actions as separate files.
  There is a convention that defines five names as special:
  <ul>
    <li><code>browse</code> in <code>browse.js</code> to return a list of resources or empty collection,</li>
    <li><code>fetch</code> in <code>fetch.js</code> to return a single resource or <code>404 Not Found</code>,</li>
    <li><code>create</code> in <code>create.js</code> to create a new resource,</li>
    <li><code>update</code> in <code>update.js</code> to update a single resource,</li>
    <li><code>destroy</code> in <code>destroy.js</code> to remove a resource</li>
  </ul>

  This ends up as a <kbd>BFCUD</kbd> acronym, extending <kbd>CRUD</kbd> where browsing/filtering
  resources is explicitly different than reading a single resource.
</docs>

<template>
  <div class="content">
    <h2>Tasks</h2>
    <Docs :content="$options.__docs" v-if="$options.docs"/>

    <div class="form-row">
      <div class="col">
        <div class="form-group">
          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white" id="addon-wrapping">
                <i class="fa fa-fw fa-plus"></i>
              </span>
            </div>
            <input
              class="form-control form-control-lg border-left-0"
              autofocus
              autocomplete="off"
              placeholder="New Task Name"
              v-model="name"
              @keyup.enter="add"
            >
          </div>
          <small class="form-text text-muted">
            Type the name of your task in the field above, then press
            <kbd>Enter</kbd>
          </small>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white" id="addon-wrapping">
                <i class="fa fa-fw fa-search"></i>
              </span>
            </div>
            <input
              class="form-control form-control-lg border-left-0"
              autofocus
              autocomplete="off"
              v-model="query"
              @keyup.enter="add"
            >
          </div>
          <small class="form-text text-muted">Search tasks by name</small>
        </div>
      </div>
    </div>
    <div class="callout callout-danger" v-show="error">
      <h4>No Database Connection</h4>
      <p>
        Tasks cannot be fetched from the server. Probably you forgot to setup the database.
        Have you run:
        from the project directory ? Is the database server running ?
      </p>
      <pre><code>
huncwot db create
huncwot db setup</code></pre>
    </div>
    <ul>
      <li v-for="task in filteredCollection" :key="task.id" class="task__item">
        <label class="custom-control custom-checkbox mr-auto">
          <input type="checkbox" class="custom-control-input" v-model="task.completed">
          <div
            contenteditable="true"
            @keydown.enter="edit($event, task)"
            @blur.prevent="edit($event, task)"
            class="custom-control-label"
          >{{ task.name }}</div>
        </label>
        <div>
          <a class="delete" @click="destroy(task.id)">
            <i class="fa fa-times"/>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sync, get, action, getter, field, namespace } from "huncwot/store";

import Task from "../model/Task";
import Docs from "./Docs.vue";

const task = namespace("task");

const filters = {
  all: (tasks: any) => tasks,
  active: (tasks: any) => tasks.filter((_: any) => !_.done),
  completed: (tasks: any) => tasks.filter((_: any) => _.done)
};

@Component({
  docs: true,
  computed: {
    error: get("task/error"),
    msg: sync("task/status@message.content")
  },
  components: { Docs }
})
export default class Tasks extends Vue {
  @task.field
  collection: any;

  @task.field
  name: any;

  query: any = "";

  async created() {
    Task.browse();
  }

  add() {
    const task = {
      name: this.name,
      completed: false
    };

    Task.create(task);

    this.name = "";
  }

  destroy(id: any) {
    Task.destroy(id);
  }

  edit(e: any, item: any) {
    item.name = e.target.innerText;
    Task.update(item);
  }

  get filteredCollection() {
    return this.collection.filter((item: any) =>
      item.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
}
.input {
  margin-bottom: 1rem;
}

label {
  margin-bottom: 0;
}

.task__item {
  background-color: #f7f9fa;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  margin: 0 0 0.75rem;
  padding: 0.5rem 1rem;
  display: flex;
  a:hover {
    color: #e15f41 !important;
    cursor: pointer;
  }
}
</style>
