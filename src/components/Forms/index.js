import {TweenMax} from 'gsap';
import React, {useEffect} from 'react';
import {CollapseForm} from './styles/index';
import {HideFormButton} from './styles/index';

export const CollapsibleForm = props => {
  let formReference;

  useEffect(() => {
    props.receive(open, close);
  }, []);

  function open() {
    TweenMax.to(formReference, 0.3, {
      height: 200,
      scaleY:1
    });
  }
  function close() {
    TweenMax.to(formReference, 0.3, {
      height: 0,
      scaleY:0
    });
  }

  return (
    <CollapseForm ref={ref => (formReference = ref)}>
      <HideFormButton onClick={event=>{event.preventDefault();close()}}/>
      {props.children}
    </CollapseForm>
  );
};