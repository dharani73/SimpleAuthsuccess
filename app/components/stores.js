import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class StoresComponent extends Component {
  @tracked query = '';
}
