import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

const GithubProjects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Henox77/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="loading loading-spinner loading-lg text-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">GitHub Projelerim</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="card bg-dark-300 hover:bg-dark-100 transition-all duration-300 border border-dark-300 hover:border-primary/30">
                <div className="card-body">
                  <h3 className="card-title text-white group-hover:text-primary transition-colors duration-300">
                    {repo.name}
                  </h3>
                  <p className="text-gray-400">{repo.description || 'Açıklama bulunmuyor'}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.language && (
                      <div className="badge badge-primary badge-lg bg-primary/20 text-primary border-primary">
                        {repo.language}
                      </div>
                    )}
                    <div className="badge badge-secondary badge-lg bg-secondary/20 text-secondary border-secondary">
                      ⭐ {repo.stargazers_count}
                    </div>
                    <div className="badge badge-accent badge-lg bg-accent/20 text-accent border-accent">
                      🔄 {repo.forks_count}
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary bg-primary/20 hover:bg-primary/30 text-primary border-primary"
                    >
                      Projeyi Görüntüle
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GithubProjects; 