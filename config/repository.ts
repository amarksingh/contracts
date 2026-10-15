/**
 * Class Repository.
 */
class Repository {
    /**
     * Get the specified configuration value.
     *
     * @param {string} key
     * @param {*} [defaultValue]
     * @returns {*}
     */
    get(key: string, defaultValue?: any): any {
    }

    /**
     * Set a given configuration value.
     *
     * @param {string} key
     * @param {*} value
     * @returns {*}
     */
    set(key: string, value: any): any {
    }

    /**
     * Determine if the given configuration value exists.
     *
     * @param {string} key
     * @returns {boolean}
     */
    has(key: string): boolean {
        return false;
    }
}

module.exports = Repository;
