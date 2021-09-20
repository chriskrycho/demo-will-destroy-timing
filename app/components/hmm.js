import Component from '@glimmer/component';

export default class Hmm extends Component {
  /** @type {(el: Element) => void} */
  onWillDestroy = (el) => {
    alert(
      `Tearing down via "{{will-destroy}}", but we still have access to "${el.tagName}", which has classes "${el.classList}"`
    );
  };
}
