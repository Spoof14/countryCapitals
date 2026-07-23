type LandingProps = {
  onBrowse: () => void
  onContinue?: () => void
}

export default function Landing({ onBrowse, onContinue }: LandingProps) {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <img src="/hero-mist.jpg" alt="" className="hero__image" />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <p className="brand">
          <span className="brand__ko">마당</span>
          <span className="brand__en">Madang</span>
        </p>
        <h1 className="hero__headline">Learn Korean the way stories are told.</h1>
        <p className="hero__lede">
          Read short folklore and everyday scenes in Korean. Peek at English only when you need it.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={onBrowse}>
            Start reading
          </button>
          {onContinue ? (
            <button type="button" className="btn btn--ghost" onClick={onContinue}>
              Continue last story
            </button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
