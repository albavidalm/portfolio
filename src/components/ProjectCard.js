const ProjectCard = ({
  key,
  id,
  title,
  description,
  img,
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
          className="card__container--img"
          src={img}
          alt={`${title} screenshot`}
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

      <div className="card__container">
        <a
          href={live}
          alt={title}
          rel="noreferrer"
          target="_blank"
          className="card__container--link"
        >
          <i className="fas fa-desktop codeIcon"></i>
        </a>
        <a
          href={code}
          alt={title}
          rel="noreferrer"
          target="_blank"
          className="card__container--link"
        >
          <i className="fa-regular fa-file-code codeIcon"></i>
        </a>
        <a
          href={repo}
          alt={title}
          rel="noreferrer"
          target="_blank"
          className="card__container--link"
        >
          <i className="fa-brands fa-github codeIcon"></i>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
