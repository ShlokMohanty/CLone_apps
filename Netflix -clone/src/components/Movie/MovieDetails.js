import React from 'react';
import Aux from '../../hoc/ Aux';
import AddIcon from '../../static/images/add.svg';
import PlayIcon from '../../static/images/play-button.svg';
export default function MovieDetails(props){
    return(
        <Aux>
            <div className="modal_container">
                <h1 className="modal_title">
                    {props.movie.title || props.movie.name}
                </h1>
                <p className="modal_info">
                    <span className="modal_rating">
                        Rating: {props.movie.vote_average * 10}%{' '}
                    </span>
                    Release date: {props.movie.release_date || props.movie.first_air_data}{' '}
                    Runtime: {props.movie.runtime || props.movie.episode_run_time}m 
                </p>
                <p className="modal_episode">
                    {props.movie.number_of_episodes
                      ? ' Episodes: ' + props.movie.number_of_episodes
                      : ''}
                    {props.movie.number_of_seasons
                      ? ' Seasons: ' + props.movie.number_of_seasons
                      : ''}
                </p>
                <p className="modal_overview">{props.movie.overview}</p>
                <button className="modal_btn modal_btn--red">
                    <PlayIcon className="modal_btn--icon" />
                    Play
                </button>
                <button className="modal_btn">
                    <AddIcon className="modal_btn--icon" />
                    My List
                </button>
            </div>
        </Aux>
    );
}
