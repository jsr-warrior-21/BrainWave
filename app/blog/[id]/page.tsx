import styles from './page.module.css'

export default async function BlogPost({params}:{params:Promise<{id:string}>}) {
    // const id = (await params).id;
    const {id} = await params;
  return (<div className={styles.container}>BlogPost {id}</div>);
}
