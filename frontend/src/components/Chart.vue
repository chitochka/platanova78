<template>
    <div>
    <v-table height="300px" fixed-header @click="klik">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in desserts" :key="item.x">
          <td>{{ item.x }}</td>
          <td>{{ item.y }}</td>
          <td><v-icon><span :data-delete="JSON.stringify(index)" class="delete mdi mdi-delete"></span></v-icon></td>
        </tr>
      </tbody>
    </v-table>
    <hr>

     <v-tooltip text="Tooltip">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">Hover Over Me</v-btn>
        </template>
      </v-tooltip>


</div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          desserts: [
      { x: '2024-01-06', y: 20 },
      { x: '2024-02-06', y: 21 },
      { x: '2024-02-26', y: 25 },
      { x: '2024-04-01', y: 40 },
      { x: '2024-05-15', y: 49 },
          ],
        }
      },
      methods: {
        klik(e) {
          if (e.target.dataset) {
            var data = JSON.parse(e.target.dataset.delete)
            console.log(data)
          }
        },
      },
    }
  </script>