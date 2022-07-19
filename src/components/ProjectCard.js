const ProjectCard = ({
  key,
  id,
  title,
  description,
  img,
  imgGif,
  tags,
  code,
  live,
  repo,
}) => {
  return (
    <>
      <div className="card__buttons">
        <i className="fa-solid fa-circle card__buttons--button"></i>
        <i className="fa-regular fa-circle card__buttons--button"></i>
        <i className="fa-regular fa-circle card__buttons--button"></i>
      </div>
      <div className="card__container">
        <img
          className="card__container--img mainImg"
          src={img}
          alt={`${title} screenshot`}
          title={title}
        />
        <img
          className="card__container--img"
          src={imgGif}
          alt={`${title} live`}
          title={title}
        />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <ul className="card__tagList">
        {tags.map((tag, id) => (
          <li className="card__tagList--tag" key={id}>
            {tag}
          </li>
        ))}
      </ul>

      <div className="card__containerLink">
        {live && (
          <a
            href={live}
            alt={title}
            rel="noreferrer"
            target="_blank"
            className="card__containerLink--link"
          >
            <i className="fas fa-desktop codeIcon"></i>
          </a>
        )}
        {code && (
          <a
            href={code}
            alt={title}
            rel="noreferrer"
            target="_blank"
            className="card__containerLink--link"
          >
            <i className="fa-regular fa-file-code codeIcon"></i>
          </a>
        )}
        {repo && (
          <a
            href={repo}
            alt={title}
            rel="noreferrer"
            target="_blank"
            className="card__containerLink--link"
          >
            <i className="fa-brands fa-github codeIcon"></i>
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectCard;