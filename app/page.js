import Link from "next/link"

export default function Home() {
    return (
      <section className="home">
        <div className="home-pres">
          <h1>WorLd</h1>
          <h2 id="baseline">Words from the whole world</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur magna ligula, tincidunt nec tellus eget, luctus lacinia ligula. In tincidunt justo nec vestibulum molestie. Etiam libero risus, interdum eget lorem id, mollis facilisis eros. Praesent rutrum tortor a elit vulputate dictum. Nam justo lorem, pharetra eget luctus dictum, pharetra quis nibh. Cras auctor, metus vitae posuere auctor, nibh erat faucibus elit, eget cursus enim orci ut orci.</p>
        </div>


        <Link href="/chat" className="primary-btn">Acceder au chat</Link>
      </section>
    )
  }