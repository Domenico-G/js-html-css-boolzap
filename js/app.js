new Vue({
  el: "#app",
  data: {
    activeBoxMessage: false,
    userMessage: "",
    nameContact: "",
    activeIndex: 0,
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "",
            text: "",
            status: "",
          },
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
  },
  methods: {
    // metodo per prendere l'ultima data
    lastAccess: function (item) {
      const message = item.messages;
      const last = message.length - 1;
      const ciao = message[last].date;
      return ciao;
    },

    // metodo per prendere l'ultimo testo
    lastText: function (item) {
      const message = item.messages;
      const last = message.length - 1;
      const ciao = message[last].text;
      return ciao;
    },

    // metodo messaggi inviati
    sendMessage: function () {
      if (this.contacts[this.activeIndex].messages.length === 1) {
        this.contacts[this.activeIndex].messages.push({
          date: dayjs().format("HH:mm"),
          text: this.userMessage,
          status: "sent",
        });
        Vue.delete(this.contacts[this.activeIndex].messages, 0);
      } else {
        this.contacts[this.activeIndex].messages.push({
          date: dayjs().format("HH:mm"),
          text: this.userMessage,
          status: "sent",
        });
      }
      this.userMessage = "";
      let that = this;
      setTimeout(function () {
        that.receivedMessage();
      }, 1000);
    },
    // metodo messaggi ricevuti
    receivedMessage: function () {
      this.contacts[this.activeIndex].messages.push({
        date: dayjs().format("HH:mm"),
        text: "Perfetto, grazie!!",
        status: "received",
      });
    },

    // metodo contatto selzionato
    contactSelected: function (index) {
      this.activeIndex = index;
    },

    // metodo ricerca contatti
    userSearch: function () {
      this.contacts.forEach((element) => {
        if (
          element.name.toUpperCase().includes(this.nameContact.toUpperCase())
        ) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    },

    // metodo per cancellare messaggi
    deleteMessage: function (index) {
      if (this.contacts[this.activeIndex].messages.length === 1) {
        this.contacts[this.activeIndex].messages.push({
          date: "",
          text: "",
          status: "",
        });
        Vue.delete(this.contacts[this.activeIndex].messages, index);
      } else {
        Vue.delete(this.contacts[this.activeIndex].messages, index);
      }
    },
  },
});
Vue.config.devtools = true;
