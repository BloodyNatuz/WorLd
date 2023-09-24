import Server from 'socket.io'

export default function Chat() {


    return (
      <>
        <ul id="messages"></ul>
        <form id="form" action="">
          <input id="input" autocomplete="off" /><button>Send</button>
        </form>


        <script src="/socket.io/socket.io.js"></script>
        <script>
          var socket = io();
        </script>
      </>

    )
  }