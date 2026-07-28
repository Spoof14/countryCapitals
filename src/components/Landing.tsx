import { Link } from '@tanstack/react-router'

type LandingProps = {
  onBrowse: string
  continueStoryId?: string
}

export default function Landing({ onBrowse, continueStoryId }: LandingProps) {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}hero-mist.jpg`} alt="" className="hero__image" />
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
          <Link to={onBrowse} className="btn btn--primary">
            Start reading
          </Link>
          {continueStoryId ? (
            <Link
              to="/story/$storyId"
              params={{ storyId: continueStoryId }}
              className="btn btn--ghost"
            >
              Continue last story
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
