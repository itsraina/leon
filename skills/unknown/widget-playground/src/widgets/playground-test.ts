import { Widget, type WidgetOptions } from '@sdk/widget'
import { type WidgetComponent } from '@sdk/widget-component'
import { Button } from '@sdk/aurora'

interface Params {
  value1: string
  value2: string
}

// TODO
function runSkillAction(actionName, params) {
  return {
    method: 'run_skill_action',
    params: {
      actionName,
      params
    }
  }
}
// TODO
function sendUtterance(utterance) {
  return {
    method: 'send_utterance',
    params: {
      utterance
    }
  }
}

export class PlaygroundTestWidget extends Widget<Params> {
  constructor(options: WidgetOptions<Params>) {
    super(options)
  }

  public render(): WidgetComponent {
    const children = this.params.value1 + ' ' + this.params.value2
    return new Button({
      children,
      secondary: true,
      // TODO
      onClick: () => {
        return runSkillAction('test', 'param1')
      }
    })
  }
}
