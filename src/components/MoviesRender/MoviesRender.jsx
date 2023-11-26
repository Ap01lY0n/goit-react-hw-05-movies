/** @format */
import { useLocation } from 'react-router-dom';
import { MovieLink, MoviesList, MoviesListItem } from '../Styled/Home.styled';

const MoviesRender = ({ movies }) => {
	const location = useLocation();
	return (
		<MoviesList>
			{movies.map(movie => (
				<MoviesListItem key={movie.id}>
					<MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
						{movie.name ?? movie.title ?? movie.original_title}
					</MovieLink>
				</MoviesListItem>
			))}
		</MoviesList>
	);
};

export default MoviesRender;
