import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('form-elements', {
    text: 'form-elements button',
    onAction: () => {
      editor.setContent('<p>content added from form-elements</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('form-elements', setup);
};
