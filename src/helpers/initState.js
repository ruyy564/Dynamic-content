export const initState = {
  content: [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
      content: [
        {
          type: 'label',
          props: {
            caption: 'test3',
            visible: true,
          },
        },
      ],
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: true,
      },
    },
    {
      type: 'button',
      props: {
        width: 100,
        caption: 'click me',
        height: 50,
        visible: true,
      },
    },
  ],
  error: null,
};
